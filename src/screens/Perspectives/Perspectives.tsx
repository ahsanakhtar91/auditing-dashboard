import {
  ArrowLeftIcon,
  BarChart3Icon,
  BellIcon,
  CheckSquareIcon,
  ChevronDownIcon,
  FileIcon,
  FileTextIcon,
  HomeIcon,
  SearchIcon,
  SendIcon,
  UsersIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const navigationItems = [
  { icon: HomeIcon, label: "Dashboard", active: true },
  { icon: FileTextIcon, label: "Perspectives", active: false },
  { icon: CheckSquareIcon, label: "Tasks", active: false },
  { icon: FileIcon, label: "Documents", active: false },
  { icon: BarChart3Icon, label: "Reports", active: false },
  { icon: UsersIcon, label: "UsersIcon & Roles", active: false },
];

const statisticsCards = [
  { icon: "/hugeicons-files-01.svg", count: "4", label: "Total Evidence" },
  {
    icon: "/hugeicons-file-search.svg",
    count: "3",
    label: "Under Review Evidence",
  },
  {
    icon: "/hugeicons-file-export.svg",
    count: "2",
    label: "In Progress Evidence",
  },
  {
    icon: "/hugeicons-file-validation.svg",
    count: "1",
    label: "Completed Evidence",
  },
];

const documentsData = [
  {
    number: "5.4.1.1",
    name: "Digital_transformation_plan.pdf",
    lead: "Ahmed Khaled",
    preparer: "Ahmed Khaled",
    date: "2025-08-01",
    dueDate: "2025-08-01",
    status: "Approved",
    statusColor: "bg-[#34c7591a] text-[#34c759]",
  },
  {
    number: "5.4.1.2",
    name: "Kpi_framework.xlsx",
    lead: "Mona Hamed",
    preparer: "Mona Hamed",
    date: "2025-08-01",
    dueDate: "2025-08-01",
    status: "Pending Review",
    statusColor: "bg-[#ffcc001a] text-[#ffcc00]",
  },
  {
    number: "5.4.1.3",
    name: "Roadmap_version1.docx",
    lead: "Rami Alsharif",
    preparer: "Rami Alsharif",
    date: "2025-08-01",
    dueDate: "2025-08-01",
    status: "Pending Review",
    statusColor: "bg-[#ffcc001a] text-[#ffcc00]",
  },
];

const commentsData = [
  {
    avatar: "/e.svg",
    initial: "E",
    name: "Sara Ibrahim",
    date: "2025-08-05",
    comment: "Ensure The Plan Includes A Clear Governance Model.",
  },
  {
    avatar: "/m.svg",
    initial: "M",
    name: "Mona Hamed",
    date: "2025-08-05",
    comment: "Ensure The Plan Includes A Clear Governance Model.",
  },
];

const recentActivities = [
  {
    text: "Roadmap_version1.docx Uploaded By Rami Alsharif",
    time: "5 Mins Ago",
  },
  {
    text: "Kpi_framework.xlsx Uploaded By Mona Hamed",
    time: "20 Mins Ago",
  },
  {
    text: "Digital_transformation_plan.pdf Approved By Advisory Team",
    time: "1 Hour Ago",
  },
];

const tableHeaders = [
  { label: "Document Number", icon: "/hugeicons-sorting-a-z-02.svg" },
  { label: "Document Name", icon: "/hugeicons-sorting-a-z-02.svg" },
  { label: "Document Lead", icon: "/hugeicons-sorting-a-z-02.svg" },
  { label: "Document Preparer", icon: "/hugeicons-sorting-a-z-02.svg" },
  { label: "Date", icon: "/hugeicons-sorting-a-z-02.svg" },
  { label: "Due Date", icon: "/hugeicons-sorting-a-z-02.svg" },
  { label: "Status", icon: "/hugeicons-sorting-a-z-02.svg" },
];

export const Perspectives = (): JSX.Element => {
  return (
    <div className="flex min-h-screen bg-background-color">
      <aside className="w-64 bg-[#1d3557] border-r border-[#f1f2f3] flex flex-col">
        <div className="p-6">
          <img
            className="w-[100px] h-10 object-cover"
            alt="Tahwul"
            src="/tahwul-01-3x-1.png"
          />
        </div>

        <nav className="flex-1 px-6 py-4 space-y-2">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className={`flex w-full items-center gap-2.5 p-2.5 rounded-lg transition-colors ${
                item.active
                  ? "bg-[#98aec01a] text-white"
                  : "text-[#7a9ec2] hover:bg-[#98aec01a] hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="[font-family:'Cairo',Helvetica] font-medium text-sm">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="p-6">
          <img className="w-9 h-9" alt="Frame" src="/frame-1171274846.svg" />
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-[60px] bg-white border-b border-[#e0e7ec] flex items-center justify-between px-8">
          <div className="flex items-center gap-4 flex-1 max-w-[318px]">
            <div className="relative flex-1">
              <Input
                placeholder="Search"
                className="pl-10 bg-background-color border-[#e0e7ec] [font-family:'Cairo',Helvetica]"
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-color" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <BellIcon className="w-4 h-4 text-primary-color" />
              <span className="absolute -top-1 -right-1 w-[7px] h-[7px] bg-accent-red rounded-full" />
            </button>

            <div className="flex items-center gap-2 bg-[#f9fafa] rounded-[30px] px-4 py-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/ellipse-18.svg" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <span className="font-typography-label text-[#23252a] text-xs">
                Mohamed
              </span>
              <ChevronDownIcon className="w-3 h-3 text-[#23252a]" />
            </div>
          </div>
        </header>

        <div className="flex-1 p-8 space-y-6">
          <div className="flex items-center gap-2">
            <ArrowLeftIcon className="w-4 h-4 text-primary-color" />
            <h1 className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
              Digital Transformation Strategic Planning
            </h1>
          </div>

          <Card className="border-[#e0e7ec]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <Badge
                    variant="outline"
                    className="border-[#e0e8ed] text-[#8597a8] [font-family:'Cairo',Helvetica] font-medium"
                  >
                    Strategy & Planning
                  </Badge>
                  <h2 className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                    Digital Transformation Strategic Planning
                  </h2>
                  <p className="[font-family:'Cairo',Helvetica] font-normal text-secondary-color text-sm">
                    Develop Comprehensive Strategic Plans For Digital
                    Transformation Aligned With Organizational Goals
                  </p>
                </div>

                <div className="relative w-[83px] h-[81px]">
                  <img
                    className="absolute top-0 left-0 w-[81px] h-[81px]"
                    alt="Progress circle"
                    src="/ellipse-116.svg"
                  />
                  <img
                    className="absolute top-0 left-px w-[81px] h-[81px]"
                    alt="Progress fill"
                    src="/ellipse-117.svg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center [font-family:'Cairo',Helvetica] font-bold text-primary-color text-sm">
                    100%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-4 gap-4">
            {statisticsCards.map((card, index) => (
              <Card key={index} className="border-[#e0e7ec]">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={card.icon} alt="" className="w-6 h-6" />
                    <span className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-2xl">
                      {card.count}
                    </span>
                  </div>
                  <p className="[font-family:'Cairo',Helvetica] font-normal text-secondary-color text-sm">
                    {card.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="evidence" className="space-y-6">
            <TabsList className="bg-[#e0e7ec80] p-[3px]">
              <TabsTrigger
                value="overview"
                className="[font-family:'Cairo',Helvetica] text-sm data-[state=active]:bg-white-color"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="evidence"
                className="[font-family:'Cairo',Helvetica] text-sm data-[state=active]:bg-white-color"
              >
                Evidence
              </TabsTrigger>
            </TabsList>

            <TabsContent value="evidence" className="space-y-6">
              <Card className="border-[#e0e7ec]">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#f5f8fb]">
                        {tableHeaders.map((header, index) => (
                          <TableHead
                            key={index}
                            className="[font-family:'Cairo',Helvetica]"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-primary-color text-xs font-normal">
                                {header.label}
                              </span>
                              <img
                                src={header.icon}
                                alt=""
                                className="w-3 h-3"
                              />
                            </div>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {documentsData.map((doc, index) => (
                        <TableRow key={index}>
                          <TableCell className="[font-family:'Cairo',Helvetica] font-normal text-primary-color text-sm text-center">
                            {doc.number}
                          </TableCell>
                          <TableCell className="[font-family:'Cairo',Helvetica] font-normal text-primary-color text-sm">
                            {doc.name}
                          </TableCell>
                          <TableCell className="[font-family:'Cairo',Helvetica] font-normal text-primary-color text-sm text-center">
                            {doc.lead}
                          </TableCell>
                          <TableCell className="[font-family:'Cairo',Helvetica] font-normal text-primary-color text-sm text-center">
                            {doc.preparer}
                          </TableCell>
                          <TableCell className="[font-family:'Cairo',Helvetica] font-normal text-primary-color text-sm text-center">
                            {doc.date}
                          </TableCell>
                          <TableCell className="[font-family:'Cairo',Helvetica] font-normal text-primary-color text-sm text-center">
                            {doc.dueDate}
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={`${doc.statusColor} [font-family:'Cairo',Helvetica] font-normal text-sm`}
                            >
                              {doc.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <div className="grid grid-cols-[1fr_368px] gap-6">
                <Card className="border-[#e0e7ec]">
                  <CardContent className="p-6 space-y-6">
                    <h3 className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                      Comments
                    </h3>

                    <div className="space-y-4">
                      {commentsData.map((comment, index) => (
                        <Card key={index} className="border-[#e0e7ec]">
                          <CardContent className="p-4 space-y-3">
                            <div className="flex items-start gap-3">
                              <Avatar className="w-6 h-6 bg-border-color">
                                <AvatarImage src={comment.avatar} />
                                <AvatarFallback className="text-xs">
                                  {comment.initial}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-sm">
                                    {comment.name}
                                  </span>
                                  <span className="[font-family:'Cairo',Helvetica] font-normal text-secondary-color text-sm">
                                    {comment.date}
                                  </span>
                                </div>
                                <p className="[font-family:'Cairo',Helvetica] font-normal text-primary-color text-sm">
                                  {comment.comment}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Button className="bg-primary-color hover:bg-primary-color/90 [font-family:'Cairo',Helvetica]">
                      <SendIcon className="w-4 h-4 mr-2" />
                      Post Comment
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-[#e0e7ec]">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                      Recent Activities
                    </h3>

                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index}>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-accent-red rounded-[3px] mt-2" />
                            <div className="flex-1 space-y-1">
                              <p className="[font-family:'Cairo',Helvetica] font-medium text-primary-color text-base leading-[22px]">
                                {activity.text}
                              </p>
                              <span className="[font-family:'Cairo',Helvetica] font-normal text-secondary-color text-xs">
                                {activity.time}
                              </span>
                            </div>
                          </div>
                          {index < recentActivities.length - 1 && (
                            <Separator className="my-4" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};
