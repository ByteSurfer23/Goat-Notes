import { getUser } from "@/auth/supabase/server"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { prisma } from "@/db/prisma";
import { Note } from "@prisma/client";

async function AppSidebar() {

    const user = await getUser();
    let notes : Note[] = [];
    if(user){
        await prisma.note.findMany({
            where:{
                authorId:user.id
            },
            orderBy:{
                updatedAt:"desc"
            }
        })
    }
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar