"use client";

// -- Next --
import Image from "next/image";
// -- Mui --
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
// -- React-icon
import { IoSearch } from "react-icons/io5";
// -- Hook --
import { useSocket } from "@/hooks/useSocket";
import { useAuth } from "@/hooks/useAuth";
// -- React --
import { useEffect, useState } from "react";
// -- Types --
import { ConversationItem } from "@/types/chat";
import Link from "next/link";

export default function ListConversation() {
  const socket = useSocket();
  const { user } = useAuth();
  const [listConversation, setListConversation] = useState<ConversationItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    try {
      socket?.emit("getRecentConversations", { userId: user?._id }, (val: ConversationItem[]) => {
        setListConversation(val);
      });
    } catch (error) {
      console.log("Error socket", error);
    } finally {
      setLoading(false);
    }
  }, [socket, user]);
  if (loading) {
    return <>Loading...</>;
  }
  console.log(listConversation);
  return (
    <>
      <header>
        <h1 className="text-3xl font-semibold mb-4">Messages</h1>
        <div className="mb-4">
          <Paper
            component="form"
            sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%", borderRadius: 3 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search messages" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <IoSearch />
            </IconButton>
          </Paper>
        </div>
      </header>
      <ul className="flex flex-col gap-y-8 overflow-y-auto flex-1">
        {listConversation?.map((item) => (
          <Link href={`chat/${item.id}`} key={item.id}>
            <li className="flex items-center justify-between hover:bg-gray-100 hover:rounded-2xl">
              <div>
                <Image
                  src={item.avatar}
                  alt="avatar"
                  width={51}
                  height={50}
                  style={{ height: "auto" }}
                  className="overflow-hidden rounded-full"
                />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#1A1D1F]">{item.name}</h3>
                <p className="text-[14px] text-[#258C60]">{item.isTyping ? "Typing..." : ""}</p>
              </div>
              <div className="flex flex-col items-end mr-2">
                <div className="text-[13px] text-[#A9ABAD]">{item.timestamp}</div>
                {item.unreadCount > 0 && (
                  <div className="text-[14px] text-white flex-center w-[16px] h-[16px] rounded-full bg-red-500">
                    {item.unreadCount}
                  </div>
                )}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
