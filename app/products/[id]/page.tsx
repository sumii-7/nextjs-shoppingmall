import { supabase } from "@/utils/supabase/client";

interface ProductPageProps {
  params: { id: string };
}

const ProductPageProps = async ({ params }: ProductPageProps) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params)
    .single();

  if (error) {
    <div>하 ..</div>;
  }
  return <div>page</div>;
};

export default ProductPageProps;
