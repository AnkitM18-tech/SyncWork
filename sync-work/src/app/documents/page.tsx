import { Button } from "@/components/ui/button";
import { HelpCircleIcon } from "lucide-react";
import Link from "next/link";

const DocumentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-blue-200 p-3 rounded-full">
            <HelpCircleIcon className="size-10 text-blue-600" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Oops! This is not the page you are looking for.
          </h2>
          <p>You have landed on the wrong page. Click below to return.</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <Button asChild className="font-medium">
          <Link href="/">Go Back</Link>
        </Button>
      </div>
    </div>
  );
};

export default DocumentsPage;
