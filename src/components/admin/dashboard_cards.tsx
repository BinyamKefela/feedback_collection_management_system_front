import {
  GitBranchIcon,
  LucideGitBranch,
  MapPinIcon,
  MessageCircleIcon,
  TreesIcon,
  UserIcon,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

function DashboardCards() {
  return (
    <div className="w-full flex flex-col justify-center items-start">
      <h3
        className="ml-8 sm:ml-15 font-bold
    text-lg mb-4"
      >
        Dashboard
      </h3>
      <div className="w-full items-center justify-center flex">
        <div className="grid text-xs grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <Card className="w-full bg-[#1BA84F] cursor-pointer hover:bg-[#5aaa77]">
            <CardContent>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col">
                  <p className="text-white font-bold">total users</p>
                  <p className="text-white font-bold">2300+</p>
                </div>
                <UserIcon className="text-white" size={25} />
              </div>
            </CardContent>
          </Card>
          <Card className="w-full bg-[#F6149B] cursor-pointer hover:bg-[#e389bf]">
            <CardContent>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col">
                  <p className="text-white font-bold">Total feedbacks</p>
                  <p className="text-white font-bold">2300+</p>
                </div>
                <MessageCircleIcon className="text-white" size={25} />
              </div>
            </CardContent>
          </Card>
          <Card className="w-full bg-[#1BA1A8] cursor-pointer hover:bg-[#4faeb3]">
            <CardContent>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col">
                  <p className="text-white font-bold">total districts</p>
                  <p className="text-white font-bold">2300+</p>
                </div>
                <MapPinIcon className="text-white" size={25} />
              </div>
            </CardContent>
          </Card>
          <Card className="w-full bg-[#1BA84F] cursor-pointer hover:bg-[#50b575]">
            <CardContent>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col">
                  <p className="text-white font-bold">total branches</p>
                  <p className="text-white font-bold">2300+</p>
                </div>
                <LucideGitBranch className="text-white" size={25} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
