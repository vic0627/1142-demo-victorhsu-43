import Image from "next/image";
import Hero_43 from "./_components/home/Hero_43";
import FeaturedProducts_43 from "./_components/home/FeaturedProducts_43";
import { Suspense } from "react";
import LoadingContainer from "./_components/global/LoadingContainer";

export default function Home() {
  return (
    <>
<Hero_43 />
{/* <LoadingContainer /> */}
<Suspense fallback={<LoadingContainer />}>
    <FeaturedProducts_43 />
</Suspense>
    </>
  );
}
