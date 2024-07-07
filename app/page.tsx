import { supabase } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { data, error } = await supabase.from("products").select("*");
  console.log(data);
  if (error) {
    <div>에러</div>;
  }
  return (
    <main>
      <div className="flex gap-x-12">
        {data?.map((item) => {
          return (
            <Link
              href={`/products/${item.id}`}
              key={item.id}
              className="border w-48 h-auto"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex flex-col gap-y-1 text-sm font-semibold p-2">
                <div>고양이: {item.name}</div>
                <div>{item.description}</div>
                <div>가격: {item.price}원</div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
