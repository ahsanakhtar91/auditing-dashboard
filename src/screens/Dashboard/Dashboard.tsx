import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/Avatar";
import { Badge } from "../../components/ui/Badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/Select";
import { SideNav } from "../../components/layout/SideNav";
import { Header } from "../../components/layout/Header";

interface DashboardProps {
  onNavigate?: (page: string) => void;
}

const timelinePhases = [
  { label: "Kickoff Workshop", date: "Mar 17" },
  { label: "Data Collection", date: "March 18" },
  { label: "Initial Phase", date: "May 8" },
  { label: "Verification", date: "May 9–July 12" },
  { label: "Completion Reviews", date: "July 13" },
  { label: "Cycle Conclusion", date: "August 21" },
];

const metricCards = [
  {
    value: "78.65%",
    label: "Overall Progress",
    icon: "/hugeicons-chart-bar-line.svg",
  },
  { value: "95", label: "Total Criteria", icon: "/hugeicons-folder-01.svg" },
  {
    value: "52",
    label: "Completed Criteria",
    icon: "/hugeicons-folder-check.svg",
  },
  {
    value: "386",
    label: "Evidence Documents",
    icon: "/hugeicons-file-security.svg",
  },
  {
    value: "302",
    label: "Evidence (Completed)",
    icon: "/hugeicons-file-verified.svg",
  },
  {
    value: "258",
    label: "Uploaded To DGA",
    icon: "/hugeicons-file-upload.svg",
  },
];

const perspectives = [
  {
    title: "Strategy And Planning",
    percentage: "97.78%",
    subcategories: [
      { name: "Digital Transformation", items: [1, 2, 3] },
      { name: "Digital Governance", items: [1, 2, 3] },
      { name: "Enterprise Architecture", items: [1, 2, 3, 4] },
    ],
  },
  {
    title: "Organization And Culture",
    percentage: "70.83%",
    subcategories: [
      { name: "Digital Culture And Environment", items: [1, 2, 3, 4] },
      { name: "Leadership Development", items: [1, 2, 3, 4] },
      { name: "Skills & Capacity Building", items: [1, 2, 3, 4] },
    ],
  },
  {
    title: "Operations And Execution",
    percentage: "80.00%",
    subcategories: [
      { name: "Business Processes", items: [1, 2, 3, 4] },
      { name: "Risk Management", items: [1, 2, 3, 4, 5, 6, 7] },
      { name: "Business Continuity", items: [1, 2, 3, 4, 5] },
    ],
  },
  {
    title: "Business Continuity",
    percentage: "90.59%",
    subcategories: [
      { name: "Support Systems", items: [1, 2, 3, 4] },
      { name: "IT Infrastructure", items: [1, 2, 3, 4] },
      { name: "Cloud Infrastructure", items: [1, 2, 3, 4] },
    ],
  },
  {
    title: "Information Technology",
    percentage: "75.00%",
    subcategories: [
      { name: "Governance Platforms", items: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
      { name: "Business Continuity", items: [1, 2, 3, 4, 5, 6] },
    ],
  },
  {
    title: "Comprehensive Governance",
    percentage: "64.44%",
    subcategories: [
      { name: "Service Quality", items: [1, 2, 3] },
      { name: "Digital Channels", items: [1, 2, 3, 4] },
    ],
  },
  {
    title: "Channels And Services",
    percentage: "100%",
    subcategories: [
      { name: "User Engagement", items: [1, 2, 3, 4] },
      { name: "User Relationship", items: [1, 2, 3, 4] },
      { name: "User Experience", items: [1, 2, 3, 4] },
    ],
  },
  {
    title: "Beneficiary Centralization",
    percentage: "60.00%",
    subcategories: [
      { name: "Data Governance", items: [1, 2, 3] },
      { name: "Data Usage & Availability", items: [1, 2, 3] },
      { name: "Open Data", items: [1, 2, 3, 4] },
    ],
  },
  {
    title: "Government Data",
    percentage: "87.50%",
    subcategories: [
      { name: "Innovation", items: [1, 2] },
      { name: "Creative Solutions", items: [1, 2] },
    ],
  },
  {
    title: "Research And Innovation",
    percentage: "17.65%",
    subcategories: [
      { name: "Innovation", items: [1, 2] },
      { name: "Creative Solutions", items: [1, 2] },
    ],
  },
];

const statusLegend = [
  { label: "Not Started", color: "bg-secondary-color" },
  { label: "In Progress", color: "bg-warning" },
  { label: "Completed", color: "bg-success" },
  { label: "Partially Uploaded", color: "bg-[#004379]" },
  { label: "Fully Uploaded", color: "bg-info" },
  { label: "Delayed", color: "bg-error" },
];

const topPerformers = [
  {
    name: "Ahmed Al-Ali",
    role: "Strategy Perspective",
    score: "96%",
    avatar: "/ellipse-118.svg",
  },
  {
    name: "Sarah Al-Khaled",
    role: "Beneficiary Perspective",
    score: "94%",
    avatar: "/ellipse-119.svg",
  },
  {
    name: "Mohammad Al-Mansour",
    role: "IT Perspective",
    score: "92%",
    avatar: "/ellipse-120.svg",
  },
];

const recentActivities = [
  {
    text: 'Document "strategy_review.pdf" was uploaded by Ahmed Khaled',
    time: "5 Mins Ago",
  },
  {
    text: 'Task "Review Compliance Files" was assigned to Mona Hamed',
    time: "20 Mins Ago",
  },
  {
    text: 'New Criterion "5.3 Digital Identity" was created by Admin',
    time: "1 Hour Ago",
  },
];

const monthlyPerformance = [
  { month: "Jan", value: 90 },
  { month: "Feb", value: 75 },
  { month: "Mar", value: 80 },
  { month: "Apr", value: 45 },
  { month: "May", value: 90 },
  { month: "Jun", value: 85 },
  { month: "Jul", value: 60 },
  { month: "Aug", value: 90 },
  { month: "Sept", value: 80 },
  { month: "Oct", value: 55 },
  { month: "Nov", value: 95 },
  { month: "Dec", value: 85 },
];

const getStatusColor = (index: number, total: number) => {
  const ratio = index / total;
  if (ratio < 0.3) return "bg-success";
  if (ratio < 0.5) return "bg-warning";
  if (ratio < 0.7) return "bg-secondary-color";
  if (ratio < 0.9) return "bg-info";
  return "bg-error";
};

export const Dashboard = ({ onNavigate }: DashboardProps): JSX.Element => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-background-color">
      <SideNav 
        activeItem="dashboard" 
        collapsed={sidebarCollapsed} 
        onNavigate={onNavigate} 
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main className="flex-1">
        <Header />

        <div className="p-6 space-y-6">
          <Card className="border-[#e0e7ec]">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                  Project Timeline
                </CardTitle>
                <Select defaultValue="2026">
                  <SelectTrigger className="w-[90px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Timeline track with dots */}
                <div className="relative bg-[#f5f8fb]">
                  {/* Background track */}
                  <div className="h-3.5 bg-[#f5f8fb] rounded-[10px]">
                    {/* Green progress fill */}
                    <div className="absolute left-0 top-0 w-[30%] h-3.5 bg-[#1ea54e] rounded-[10px]" />
                  </div>
                  {/* Dots positioned on the track */}
                  <div className="absolute inset-0 grid grid-cols-6">
                    {timelinePhases.map((_, index) => (
                      <div key={index} className="flex items-center justify-center">
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            index < 2 ? "bg-white-color" : "bg-accent-red"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Labels aligned with dots */}
                <div className="grid grid-cols-6 mt-2">
                  {timelinePhases.map((phase, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <span className="[font-family:'Cairo',Helvetica] font-medium text-primary-color text-sm text-center">
                        {phase.label}
                      </span>
                      <span className="[font-family:'Cairo',Helvetica] font-normal text-secondary-color text-sm text-center mt-1">
                        {phase.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-6 gap-4">
            {metricCards.map((card, index) => (
              <Card key={index} className="border-[#e0e7ec]">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <div className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-2xl">
                        {card.value}
                      </div>
                      <div className="[font-family:'Cairo',Helvetica] font-normal text-secondary-color text-sm mt-1">
                        {card.label}
                      </div>
                    </div>
                    <img src={card.icon} alt="" className="w-6 h-6 text-accent-red" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-[#e0e7ec]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                  Progress Status
                </CardTitle>
                <div className="flex items-center gap-[18px]">
                  {statusLegend.map((status, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <span className="[font-family:'Cairo',Helvetica] font-normal text-primary-color text-sm">
                        {status.label}
                      </span>
                      <div className={`w-2 h-2 ${status.color} rounded`} />
                    </div>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-10 gap-3">
                {perspectives.map((perspective, pIndex) => (
                  <div 
                    key={pIndex} 
                    className="flex flex-col gap-3 cursor-pointer"
                    onClick={() => onNavigate?.("perspectives")}
                  >
                    <div className="bg-primary-color rounded-[10px] p-4 h-[90px] flex flex-col items-center justify-center hover:bg-[#2a4a6b] transition-colors">
                      <div className="[font-family:'Cairo',Helvetica] font-bold text-white-color text-xs text-center mb-2">
                        {perspective.title}
                      </div>
                      <Badge className="bg-[#ffffff1a] text-white-color text-sm font-bold">
                        {perspective.percentage}
                      </Badge>
                    </div>

                    {perspective.subcategories.map((sub, sIndex) => (
                      <div
                        key={sIndex}
                        className="bg-[#f5f8fb] rounded-[10px] border border-[#e0e7ec] p-3 flex flex-col items-center gap-2"
                        style={{ minHeight: `${sub.items.length * 30 + 40}px` }}
                      >
                        <div className="[font-family:'Cairo',Helvetica] font-normal text-primary-color text-[10px] text-center">
                          {sub.name}
                        </div>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {sub.items.map((item, iIndex) => (
                            <div
                              key={iIndex}
                              className={`w-6 h-6 rounded-full flex items-center justify-center ${getStatusColor(
                                iIndex,
                                sub.items.length,
                              )}`}
                            >
                              <span className="[font-family:'Cairo',Helvetica] font-normal text-white-color text-base">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-3 gap-6">
            <Card className="border-[#e0e7ec]">
              <CardHeader>
                <CardTitle className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                  Overall Compliance Score
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-[258px] h-[129px]">
                  <svg className="w-full h-full" viewBox="0 0 258 129">
                    <path
                      d="M20,129 A109,109 0 0,1 238,129"
                      fill="none"
                      stroke="#e0e7ec"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20,129 A109,109 0 0,1 160,25"
                      fill="none"
                      stroke="#1ea54e"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                    <div className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-[44px]">
                      65%
                    </div>
                  </div>
                </div>
                <div className="[font-family:'Cairo',Helvetica] font-normal text-[#8496a8] text-sm text-center mt-4">
                  Basic Standards 2025
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#e0e7ec]">
              <CardHeader>
                <CardTitle className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                  Top Performing Perspective Leaders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 pb-4 border-b border-[#e0e7ec] last:border-0"
                  >
                    <Avatar className="w-[47px] h-[47px]">
                      <AvatarImage src={performer.avatar} />
                      <AvatarFallback>{performer.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="[font-family:'Cairo',Helvetica] font-medium text-primary-color text-base">
                        {performer.name}
                      </div>
                      <div className="[font-family:'Cairo',Helvetica] font-medium text-[#8597a8] text-base">
                        {performer.role}
                      </div>
                    </div>
                    <div className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                      {performer.score}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-[#e0e7ec]">
              <CardHeader>
                <CardTitle className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex gap-3 pb-4 border-b border-[#e0e7ec] last:border-0"
                  >
                    <div className="w-1.5 h-1.5 bg-accent-red rounded-[3px] mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="[font-family:'Cairo',Helvetica] font-medium text-primary-color text-base mb-1">
                        {activity.text}
                      </div>
                      <div className="[font-family:'Cairo',Helvetica] font-normal text-secondary-color text-xs">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <Card className="col-span-2 border-[#e0e7ec]">
              <CardHeader>
                <CardTitle className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                  12-Month Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-[200px]">
                  <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-secondary-color">
                    <span>100</span>
                    <span>80</span>
                    <span>60</span>
                    <span>40</span>
                    <span>20</span>
                    <span>0</span>
                  </div>
                  <div className="ml-8 h-full flex items-end justify-between gap-2">
                    {monthlyPerformance.map((data, index) => (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center gap-2"
                      >
                        <div
                          className="w-full rounded-t bg-gradient-to-t from-info to-transparent"
                          style={{ height: `${data.value}%` }}
                        />
                        <span className="text-xs text-secondary-color">
                          {data.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#e0e7ec]">
              <CardHeader>
                <CardTitle className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-base">
                  Audit Readiness
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-[258px] h-[129px]">
                  <svg className="w-full h-full" viewBox="0 0 258 129">
                    <path
                      d="M20,129 A109,109 0 0,1 238,129"
                      fill="none"
                      stroke="#e0e7ec"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20,129 A109,109 0 0,1 200,40"
                      fill="none"
                      stroke="#0078d7"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                    <div className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-[44px]">
                      80%
                    </div>
                  </div>
                </div>
                <div className="[font-family:'Cairo',Helvetica] font-normal text-secondary-color text-sm text-center mt-4">
                  Readiness Level
                </div>
                <div className="w-full border-t border-[#e0e7ec] mt-6 pt-6 grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-2xl">
                      12
                    </div>
                    <div className="[font-family:'Cairo',Helvetica] font-normal text-secondary-color text-sm mt-2">
                      Overdue Stds
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="[font-family:'Cairo',Helvetica] font-bold text-primary-color text-2xl">
                      5
                    </div>
                    <div className="[font-family:'Cairo',Helvetica] font-normal text-secondary-color text-sm mt-2">
                      Missing Evidence
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};
