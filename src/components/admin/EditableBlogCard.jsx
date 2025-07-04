"use client";

import dateFormat from "@/utils/dateFormat";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EditableBlogCards({ post }) {
  const router = useRouter();
  const [currentStatus, setCurrentStatus] = useState(post.status);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id) => {
    setIsDeleting(true);
    const deleteToastId = toast.loading("Deleting blog post...", {
      description: "This might take a moment.",
    });

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        setCurrentStatus("DELETED");
        router.refresh();
        toast.success(
          <div>
            <p className="font-semibold">Deleted!</p>
            <p>Your blog post has been successfully deleted.</p>
          </div>,
          { id: deleteToastId }
        );
      } else {
        const errorData = await res.json();
        toast.error(
          <div>
            <p className="font-bold text-red-500">Error</p>
            <p>{errorData.message || "Failed to delete blog post."}</p>
          </div>,
          { id: deleteToastId }
        );
        console.error("Delete failed:", errorData);
      }
    } catch (error) {
      toast.error(
        <div>
          <p className="font-bold text-red-500">Network Error</p>
          <p>Could not connect to the server. Please try again.</p>
        </div>,
        { id: deleteToastId }
      );
      console.error("Client side delete error:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleConvertToDraft = async (id) => {
    const convertToastId = toast.loading("Converting to draft...", {
      description: "Updating blog status.",
    });
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/state`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, status: "DRAFT" }),
        }
      );
      if (res.ok) {
        setCurrentStatus("DRAFT");
        router.refresh();
        toast.success(
          <div>
            <p className="font-semibold">Status Updated!</p>
            <p>Blog successfully converted to draft.</p>
          </div>,
          { id: convertToastId }
        );
      } else {
        const errorData = await res.json();
        toast.error(
          <div>
            <p className="font-bold text-red-500">Error</p>
            <p>{errorData.message || "Failed to convert to draft."}</p>
          </div>,
          { id: convertToastId }
        );
      }
    } catch (error) {
      toast.error(
        <div>
          <p className="font-bold text-red-500">Network Error</p>
          <p>Could not convert to draft. Please try again.</p>
        </div>,
        { id: convertToastId }
      );
    }
  };

  const publishABlog = async (id) => {
    const publishToastId = toast.loading("Publishing blog...", {
      description: "Making your blog live.",
    });
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/state`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, status: "PUBLISHED" }),
        }
      );
      if (res.ok) {
        setCurrentStatus("PUBLISHED");
        router.refresh();
        toast.success(
          <div>
            <p className="font-semibold">Published!</p>
            <p>Your blog is now live.</p>
          </div>,
          { id: publishToastId }
        );
      } else {
        const errorData = await res.json();
        toast.error(
          <div>
            <p className="font-bold text-red-500">Error</p>
            <p>{errorData.message || "Failed to publish blog."}</p>
          </div>,
          { id: publishToastId }
        );
      }
    } catch (error) {
      toast.error(
        <div>
          <p className="font-bold text-red-500">Network Error</p>
          <p>Could not publish blog. Please try again.</p>
        </div>,
        { id: publishToastId }
      );
    }
  };

  return (
    <>
      <div className=" flex">
        <div className=" bg-gray-600/20 p-3 rounded-lg w-full flex gap-3 sm:justify-between flex-col sm:flex-row md:flex-row">
          <div>
            <h2 className=" font-bold text-lg">{post.title}</h2>
            <p className=" text-sm text-gray-300">
              {post.excerpt.substring(0, 25)}...
            </p>
            <span className=" text-xs text-gray-400">
              {dateFormat(post.createdAt)}
            </span>
          </div>
          <div className=" flex flex-wrap gap-2 space-x-2 items-center">
            {currentStatus === "PUBLISHED" ? (
              <Button
                onClick={() => handleConvertToDraft(post.id)}
                variant="outline"
              >
                convert to Draft
              </Button>
            ) : (
              <Button onClick={() => publishABlog(post.id)}>Publish</Button>
            )}
            <Button
              onClick={() => router.push(`/draft/${post.slug}`)}
              variant="outline"
            >
              Edit
            </Button>
            {currentStatus === "PUBLISHED" && (
              <Button onClick={() => router.push(`/blog/${post.slug}`)}>
                View
              </Button>
            )}
            <Dialog>
              <DialogTrigger asChild>
                <Trash className="size-5 text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your blog post.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost">Cancel</Button>
                  </DialogClose>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(post.id)}
                    disabled={isDeleting} // Disable button while deleting
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
