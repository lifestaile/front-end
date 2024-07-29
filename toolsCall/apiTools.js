import prisma from "/utils/db";
// Get all tool 
export const getTools = async () => {
    const tool = await prisma.aitools.findMany({
        select: {
            id: true,
            name: true,
        }
    });
    console.log(tool);
    return tool;
}
//Getting the tool by id 

//Getting   