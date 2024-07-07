import { supabase } from "@/utils/supabase/client";
import Image from "next/image";

export default async function Home() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    <div>에러</div>;
  }
  return (
    <main>
      <div className="flex gap-x-12">
        {data?.map((item) => {
          return (
            <>
              <div>
                <Image src={item.image_url} alt={item.name} />
              </div>
              <div key={item.id}>
                <div>상품명: {item.name}</div>
                <div>가격: {item.price}원</div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}
