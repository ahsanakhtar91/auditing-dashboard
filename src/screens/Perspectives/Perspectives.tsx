import { SendIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/core/Avatar";
import { Badge } from "../../components/core/Badge";
import { Button } from "../../components/core/Button";
import { Card, CardContent } from "../../components/core/Card";
import { Separator } from "../../components/core/Separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/core/Table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/core/Tabs";
import { Icon } from "../../components/core/Icon";
import {
  filesIcon,
  fileSearchIcon,
  fileExportIcon,
  fileValidationIcon,
  sortingAZIcon,
  arrowLeftIcon,
  avatarE,
  avatarM,
  ellipse116,
} from "../../assets";

interface PerspectivesProps {
  onNavigate?: (page: string) => void;
}

const statisticsCards = [
  { icon: filesIcon, count: "4", label: "Total Evidence" },
  {
    icon: fileSearchIcon,
    count: "3",
    label: "Under Review Evidence",
  },
  {
    icon: fileExportIcon,
    count: "2",
    label: "In Progress Evidence",
  },
  {
    icon: fileValidationIcon,
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
    avatar: avatarE,
    initial: "E",
    name: "Sara Ibrahim",
    date: "2025-08-05",
    comment: "Ensure The Plan Includes A Clear Governance Model.",
  },
  {
    avatar: avatarM,
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
  { label: "Document Number", icon: sortingAZIcon },
  { label: "Document Name", icon: sortingAZIcon },
  { label: "Document Lead", icon: sortingAZIcon },
  { label: "Document Preparer", icon: sortingAZIcon },
  { label: "Date", icon: sortingAZIcon },
  { label: "Due Date", icon: sortingAZIcon },
  { label: "Status", icon: sortingAZIcon },
];

export const Perspectives = ({ onNavigate }: PerspectivesProps): JSX.Element => {
  return (
    <div className="flex-1 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate?.("dashboard")}
              className="rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Icon src={arrowLeftIcon} size="sm" />
            </button>
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
                  <Icon
                    className="absolute top-0 left-0 w-[81px] h-[81px]"
                    alt="Progress circle"
                    src={ellipse116}
                  />
                  <div className="absolute inset-0 flex items-center justify-center [font-family:'Cairo',Helvetica] font-bold text-primary-color text-sm">
                    0%
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
                    <Icon src={card.icon} size="md" />
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
                            className="[font-family:'Cairo',Helvetica] text-center"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-primary-color text-xs font-normal">
                                {header.label}
                              </span>
                              <Icon
                                src={header.icon}
                                size="xs"
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
                          <TableCell className="[font-family:'Cairo',Helvetica] font-normal text-primary-color text-sm text-center">
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
                          <TableCell className="text-center">
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
  );
};
