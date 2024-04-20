


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r  lg:block ">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              {/* <MountainIcon className="h-6 w-6" /> */}
              <span className="">AI Hub</span>
            </Link>
            <Button className="ml-auto h-8 " size="icon" variant="outline">
              <BellIcon className="h-4 w-4 text-white" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2 text-black">
            <nav className="grid items-start px-4 text-sm font-medium">
            <Link
  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-200 focus:bg-black focus:text-white`}
  href="/dashboard"
>
  <HomeIcon className="h-4 w-4" />
  Home
</Link>
              <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-200 focus:bg-black focus:text-white`}
              href="/dashboard/models"
              >
                <PackageIcon className="h-4 w-4" />
                AI Models
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-black transition-all "
                href="wip"
              >
                <UsersIcon className="h-4 w-4" />
                Evaluations
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-black transition-all "
                href="wip"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-200 focus:bg-black focus:text-white`}
                href="/dashboard/chat"
              >
               <PackageIcon className="h-4 w-4" />
                Chat
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Take Notes</CardTitle>
                <CardDescription>Save your notes here</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                    Notes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b text-black">
          <Link className="lg:hidden" href="wip">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1 mx-5">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-black" />
                <Input
                  className="w-full  shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 "
                  placeholder="Search AI models..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu >
            <DropdownMenuTrigger asChild >
        
              <Button
                className="w-16 py-5 px-5 ml-5"
                size="icon"
                variant="ghost"
              >
               Menu
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div>
        <div >{children}</div>

        </div>
      </div>
    </div>
  )
}

function BellIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}








function HomeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function MountainIcon(props:any) {
  const { width, height, color, strokeWidth } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}


function PackageIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UsersIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

