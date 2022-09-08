
export const handler = {
  async GET(_, ctx) {
    const ip = (ctx.remoteAddr as Deno.NetAddr).hostname;
    const res = await fetch("http://ip-api.com/json/" + ip);
    const data = await res.json();
    console.log(data);
    return ctx.render(data);
  },
};

export default function Home({ data }) {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <p class="my-6">
        Hello, twitter from {data.city}, {data.country}!
      </p>
    </div>
  );
}
