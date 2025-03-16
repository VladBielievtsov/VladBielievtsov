import type { APIRoute } from "astro";
import type { DiscordData } from "../types";
import ky from "ky";


const MY_DISCORD_ID = "416963547747188738";

export const GET: APIRoute = async () => {
  const data = await ky
    .get(`https://api.lanyard.rest/v1/users/${MY_DISCORD_ID}`)
    .json<DiscordData>();

  const discordAvatar = `https://cdn.discordapp.com/avatars/${MY_DISCORD_ID}/${data.data.discord_user.avatar}.png?size=1024`;

  return new Response(
    JSON.stringify({
      status: data.data.discord_status,
      avatar: discordAvatar,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
