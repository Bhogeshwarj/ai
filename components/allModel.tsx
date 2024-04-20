import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"


const AllModel = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
    <div className="flex items-center">
      <h1 className="font-semibold text-lg md:text-2xl">AI Models</h1>
      <Button className="ml-auto text-white bg-black" size="sm">
        Add AI Model
      </Button>
    </div>
    <div className="border shadow-sm rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Model</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
            <TableHead>Chat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <img
                  alt="AI Model"
                  className="rounded-md"
                  height="40"
                  src="/google-gemini-icon.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <div className="font-medium">Gemini</div>
                  <div className="text-sm text-black dark:text-gray-400">Google</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="font-medium">8.7</div>
                <div className="h-2 w-20 rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-full w-[87%] rounded-full bg-green-500" />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="default">Deployed</Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="default">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="default">
                  <EyeIcon className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
              </div>
            </TableCell>
            <TableCell>
<Link href="/dashboard/chat">
              <Badge className="w-20 hover:bg-green-400 hover:border-none  cursor-pointer rounded-md py-1 justify-center border-2" variant="default">Chat</Badge>

</Link>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <img
                  alt="AI Model"
                  className="rounded-md"
                  height="40"
                  src="/chatgpt-icon.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <div className="font-medium">GPT-3</div>
                  <div className="text-sm text-black dark:text-gray-400">OpenAI</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="font-medium">8.7</div>
                <div className="h-2 w-20 rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-full w-[87%] rounded-full bg-green-500" />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="default">In Review</Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="default">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="default">
                  <EyeIcon className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
              </div>
            </TableCell>
            <TableCell>

              <Badge className="w-20 hover:bg-green-400 hover:border-none  cursor-pointer rounded-md py-1 justify-center border-2" variant="default">Chat</Badge>

            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <img
                  alt="AI Model"
                  className="rounded-md"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <div className="font-medium">DALL-E 2</div>
                  <div className="text-sm text-black dark:text-gray-400">OpenAI</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="font-medium">9.2</div>
                <div className="h-2 w-20 rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-full w-[92%] rounded-full bg-green-500" />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="default">In Review</Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="default">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="default">
                  <EyeIcon className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
              </div>
            </TableCell>
            <TableCell>

              <Badge className="w-20 hover:bg-green-400 hover:border-none  cursor-pointer rounded-md py-1 justify-center border-2" variant="default">Chat</Badge>

            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <img
                  alt="AI Model"
                  className="rounded-md"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <div className="font-medium">Whisper</div>
                  <div className="text-sm text-black dark:text-gray-400">OpenAI</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="font-medium">7.9</div>
                <div className="h-2 w-20 rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-full w-[79%] rounded-full bg-yellow-500" />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="default">In Review</Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="default">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="default">
                  <EyeIcon className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
              </div>
            </TableCell>
            <TableCell>

              <Badge className="w-20 hover:bg-green-400 hover:border-none  cursor-pointer rounded-md py-1 justify-center border-2" variant="default">Chat</Badge>

            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <img
                  alt="AI Model"
                  className="rounded-md"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <div className="font-medium">Stable Diffusion</div>
                  <div className="text-sm text-black dark:text-gray-400">Stability AI</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="font-medium">8.4</div>
                <div className="h-2 w-20 rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-full w-[84%] rounded-full bg-green-500" />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="default">In Review</Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="default">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="default">
                  <EyeIcon className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
              </div>
            </TableCell>
            <TableCell>

              <Badge className="w-20 hover:bg-green-400 hover:border-none  cursor-pointer rounded-md py-1 justify-center border-2" variant="default">Chat</Badge>

            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-3">
                <img
                  alt="AI Model"
                  className="rounded-md"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <div className="font-medium">GPT-J</div>
                  <div className="text-sm text-black dark:text-gray-400">Anthropic</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="font-medium">7.2</div>
                <div className="h-2 w-20 rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-full w-[72%] rounded-full bg-yellow-500" />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="default">In Review</Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="default">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="default">
                  <EyeIcon className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
              </div>
            </TableCell>
            <TableCell>

              <Badge className="w-20 hover:bg-green-400 hover:border-none  cursor-pointer rounded-md py-1 justify-center border-2" variant="default">Chat</Badge>

            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </main>
  )
}

export default AllModel

function FileEditIcon(props:any) {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}

function EyeIcon(props:any) {
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
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }