import Link from "next/link";

import { auth } from "@/auth";
import { api } from "@/trpc/server";
import { Button } from "@/app/ui/button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/app/ui/dropdown-menu";
import { Separator } from "@/app/ui/separator";
import { Input } from "@/app/ui/input";
import { CreateFilterButton } from "./features/create-filter";
import { PlusIcon } from "@radix-ui/react-icons";
import { MailboxIcon, MenuIcon, SearchIcon, UserIcon } from "./ui/icons";
import { AccountNavigation } from "./features/accounts-navigation";
import { DEMO_ACCOUNTS } from "./api/demoaccounts";
import { EmailEditor } from "./features/email-editor";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  return session ?
      <div key="1" className="flex min-h-screen">
        <div className="hidden h-screen w-72 bg-gray-100 dark:bg-gray-800 lg:block">
          <div className="flex h-full max-h-screen flex-col justify-start p-0">
            <header className="flex h-14 items-center justify-around gap-4 border-b bg-gray-100 p-3 dark:bg-gray-800">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <MailboxIcon className="h-6 w-6" />
                <span>Mailbox</span>
              </Link>
              <Button className="h-8 w-8" size="icon" variant="outline">
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Add account</span>
              </Button>
            </header>
            <main className="overflow-auto px-4">
              <AccountNavigation accounts={DEMO_ACCOUNTS} />
              <div className="flex flex-col gap-4">
                <div className="p-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upgrade to Pro</CardTitle>
                      <CardDescription>
                        Unlock all features and get unlimited access to our
                        support team
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" size="sm">
                        Upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="flex-1 overflow-auto bg-white dark:bg-gray-900">
          <header className="flex h-14 items-center gap-4 border-b bg-gray-100 px-6 dark:bg-gray-800">
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
            <div className="flex-1">
              <form>
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    className="w-full appearance-none bg-white pl-8 shadow-none dark:bg-gray-950 md:w-2/3 lg:w-1/2"
                    placeholder="Search emails..."
                    type="search"
                  />
                </div>
              </form>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <Avatar>
                    {session.user.image ?
                      <AvatarImage
                        alt="My Avatar"
                        src={session.user.image ?? undefined}
                      />
                    : <AvatarFallback>
                        <UserIcon className="h-6 w-6" />
                      </AvatarFallback>
                    }
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <Link href={`/${session.user.id}/settings`}>My Account</Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="mailto:help@alecvision.com">Support</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/api/auth/signout">Sign out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <CreateFilterButton />
          </header>
          <main className="h-[calc(100vh-56px)] flex-1 overflow-auto p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Inbox</h1>
                <EmailEditor accounts={DEMO_ACCOUNTS} />
              </div>
              <div className="grid gap-4">
                <div className="group flex flex-col gap-4 rounded-lg border border-gray-200 py-2 dark:border-gray-800">
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start p-4">
                      <div className="flex items-start gap-4 text-sm">
                        <Avatar>
                          <AvatarImage alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <div className="font-semibold">Olivia Davis</div>
                          <div className="line-clamp-1 text-xs">
                            Question about Budget
                          </div>
                          <div className="line-clamp-1 text-xs">
                            <span className="font-medium">Reply-To:</span>
                            olivia.davis@vercel.com
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                        Oct 08, 2023 9:15 AM
                      </div>
                    </div>
                    <Separator />
                    <div className="prose prose-sm prose-p:leading-normal flex-1 whitespace-pre-wrap p-4 text-sm">
                      <p>
                        Hi, let&apos;s have a meeting tomorrow to discuss the
                        project. I&apos;ve been reviewing the project details
                        and have some ideas I&apos;d like to share. It&apos;s
                        crucial that we align on our next steps to ensure the
                        project&apos;s success.
                      </p>
                      <p>
                        Please come prepared with any questions or insights you
                        may have. Looking forward to our meeting!
                      </p>
                      <p>
                        Best,
                        <br />
                        Olivia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group flex flex-col gap-4 rounded-lg border border-gray-200 py-2 dark:border-gray-800">
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start p-4">
                      <div className="flex items-start gap-4 text-sm">
                        <Avatar>
                          <AvatarImage alt="@shadcn" />
                          <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <div className="font-semibold">Jared Palmer</div>
                          <div className="line-clamp-1 text-xs">
                            Project Update
                          </div>
                          <div className="line-clamp-1 text-xs">
                            <span className="font-medium">Reply-To:</span>
                            jared@example.com
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                        Oct 07, 2023 3:25 PM
                      </div>
                    </div>
                    <Separator />
                    <div className="prose prose-sm prose-p:leading-normal flex-1 whitespace-pre-wrap p-4 text-sm">
                      <p>
                        Hi team,
                        <br />
                        <br />I wanted to provide an update on the project
                        progress. We have completed the initial design phase and
                        are now moving into development. The team has been
                        working hard to ensure we meet our deadlines and deliver
                        a high-quality product.
                      </p>
                      <p>
                        Please let me know if you have any questions or
                        concerns. I&apos;ll be sure to keep you all updated as
                        we move forward.
                      </p>
                      <p>
                        Thank you,
                        <br />
                        Jared
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    : <div key="2" className="flex min-h-screen items-center justify-center">
        <Link href="/api/auth/signin">
          <Button size="lg">Sign in</Button>
        </Link>
      </div>;
}
