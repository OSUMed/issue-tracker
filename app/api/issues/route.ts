import { NextRequest } from "next/server";
import { z } from "zod";

// for larger apps, call it createIssueSchema
const schema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(50),
  status: z.enum(["open", "closed"]),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.parse(body);
  if (!validation.success) {
    return NextResponse.badRequest(validation.error);
  }
  const { title, description, status } = body;
}
