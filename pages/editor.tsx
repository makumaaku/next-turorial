// import Layout from "../src/components/layout";
// import { useState } from "react";
// import { useRouter } from "next/router";

// import MarkDownEditor from "../src/components/markdownEditor";

// export default function Home() {
//   const router = useRouter();
//   const [markdown, setMarkdown] = useState("");

//   const handleRoute = () => {
//     if (markdown == "") {
//       return;
//     }
//     router.push({
//       pathname: "/transparent", //URL
//       query: { md: markdown }, //検索クエリ
//     });
//   };

//   return (
//     <Layout>
//       <main className="my-8 mx-3">
//         <MarkDownEditor func={(e) => setMarkdown(e)} />
//         <button
//           className="bg-red-500 text-gray-100 text-lg font-bold w-full py-4 rounded-md shadow-md"
//           onClick={handleRoute}
//         >
//           作成
//         </button>
//       </main>
//     </Layout>
//   );
// }
