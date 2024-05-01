"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FI62jx4Oyix
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/app/ui/input";
import { Button } from "@/app/ui/button";
import { Separator } from "@/app/ui/separator";
import { PopoverTrigger, PopoverContent, Popover } from "@/app/ui/popover";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/app/ui/dropdown-menu";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  ImageIcon,
  LinkIcon,
  TextIcon,
  TypeIcon,
  FileEditIcon,
  MailIcon,
} from "../ui/icons";
import { type Tag, TagInput } from "emblor";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import { type Account } from "../api/demoaccounts";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/dialog";
import { Label } from "@/app/ui/label";

type EmailEditorProps = {
  accounts: Account[];
};

export function EmailEditor(props: EmailEditorProps) {
  const [to, setTo] = useState<Tag[]>([]);
  const [cc, setCc] = useState<Tag[]>([]);
  const [bcc, setBcc] = useState<Tag[]>([]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FileEditIcon className="mr-2 h-4 w-4" />
          Compose
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[90%]">
        <DialogHeader className="space-y-2 p-4">
          <DialogTitle className="flex items-center space-x-2 pb-4">
            <MailIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <div className="[b= text-lg font-semibold text-gray-800 dark:text-gray-200">
              Compose Email
            </div>
          </DialogTitle>
          <div className="flex items-center space-x-4">
            <div className="flex w-full items-center gap-4">
              <Label
                className="w-[4ch] text-left sm:w-[5ch] md:w-[7ch]"
                htmlFor="to-email"
              >
                To:
              </Label>
              <div className="w-full rounded-md border border-gray-300 bg-gray-100 p-0 text-sm *:items-center focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                <TagInput
                  placeholder="To"
                  inputFieldPosition="inline"
                  direction="row"
                  type="email"
                  tags={to}
                  setTags={setTo}
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-4">
              <Label
                className="w-[4ch] text-left sm:w-[5ch] md:w-[7ch]"
                htmlFor="from-email"
              >
                From:
              </Label>
              <Select>
                <SelectTrigger className="max-w-full rounded-md border border-gray-300 bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                  <SelectValue
                    id="from-email"
                    defaultValue={props.accounts[0]?.email}
                    placeholder="From"
                    className="max-w-full rounded-md border border-gray-300 bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                  />
                </SelectTrigger>
                <SelectContent className=" max-w-full rounded-md border border-gray-300 bg-gray-100 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                  {props.accounts.map((account) => (
                    <SelectItem
                      key={account.email}
                      value={account.email}
                      className="max-w-full overflow-hidden text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-gray-200"
                    >
                      {account.email}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex w-full items-center gap-4">
              <Label
                className="w-[4ch] text-left sm:w-[5ch] md:w-[7ch]"
                htmlFor="cc-email"
              >
                Cc:
              </Label>
              <div className="w-full rounded-md border border-gray-300 bg-gray-100 p-0 text-sm *:items-center focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                <TagInput
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                  placeholder="Cc"
                  inputFieldPosition="inline"
                  type="email"
                  tags={cc}
                  setTags={setCc}
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-4">
              <Label
                className="w-[4ch] text-left sm:w-[5ch] md:w-[7ch]"
                htmlFor="bcc-email"
              >
                Bcc:
              </Label>
              <div className="w-full rounded-md border border-gray-300 bg-gray-100 p-0 text-sm *:items-center focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                <TagInput
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                  placeholder="Bcc"
                  inputFieldPosition="inline"
                  type="email"
                  tags={bcc}
                  setTags={setBcc}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 pt-2 md:flex-row md:items-center md:gap-4 md:pt-0">
            <Label
              className="text-left sm:w-[5ch] md:w-[7ch]"
              htmlFor="subject"
            >
              Subject:
            </Label>
            <Input
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Subject"
              type="text"
            />
          </div>
        </DialogHeader>

        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex items-center bg-white px-4 py-2 shadow dark:bg-gray-800">
            <div className="flex items-center space-x-2">
              <Button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                size="icon"
                variant="ghost"
              >
                <BoldIcon className="h-4 w-4" />
              </Button>
              <Button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                size="icon"
                variant="ghost"
              >
                <ItalicIcon className="h-4 w-4" />
              </Button>
              <Button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                size="icon"
                variant="ghost"
              >
                <UnderlineIcon className="h-4 w-4" />
              </Button>
              <Separator
                className="mx-2 h-6 bg-gray-300 dark:bg-gray-700"
                orientation="vertical"
              />
              <Button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                size="icon"
                variant="ghost"
              >
                <AlignLeftIcon className="h-4 w-4" />
              </Button>
              <Button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                size="icon"
                variant="ghost"
              >
                <AlignCenterIcon className="h-4 w-4" />
              </Button>
              <Button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                size="icon"
                variant="ghost"
              >
                <AlignRightIcon className="h-4 w-4" />
              </Button>
              <Separator
                className="mx-2 h-6 bg-gray-300 dark:bg-gray-700"
                orientation="vertical"
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    size="icon"
                    variant="ghost"
                  >
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Upload Image</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Select an image file to upload.
                      </p>
                    </div>
                    <Input accept="image/*" type="file" />
                  </div>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    size="icon"
                    variant="ghost"
                  >
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Edit Link</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Enter the link text and URL.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <Input placeholder="Link Text" type="text" />
                      <Input placeholder="Link URL" type="text" />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Separator
                className="mx-2 h-6 bg-gray-300 dark:bg-gray-700"
                orientation="vertical"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    size="icon"
                    variant="ghost"
                  >
                    <TextIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuRadioGroup defaultValue="16">
                    <DropdownMenuLabel>Font Size</DropdownMenuLabel>
                    <DropdownMenuRadioItem value="12">12</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="14">14</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="16">16</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="18">18</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="20">20</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    size="icon"
                    variant="ghost"
                  >
                    <TypeIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuRadioGroup defaultValue="sans">
                    <DropdownMenuLabel>Font Family</DropdownMenuLabel>
                    <DropdownMenuRadioItem value="sans">
                      Sans-Serif
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="serif">
                      Serif
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="mono">
                      Monospace
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <div className="bg-white p-4 dark:bg-gray-800">
              <div
                className="min-h-[300px] rounded-md border border-gray-300 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
                contentEditable
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
