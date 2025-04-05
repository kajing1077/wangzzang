import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import SearchButton from "./SearchButton";

export default function SearchInput() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SearchButton />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <VisuallyHidden>
            <DialogTitle></DialogTitle>
          </VisuallyHidden>
        </DialogHeader>
        <div className="flex w-full gap-4 py-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <form>
              <Input
                className="w-full p-6 pl-10 border rounded"
                placeholder="검색어를 입력하세요."
                name="query"
              />
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
