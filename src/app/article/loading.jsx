import { Skeleton } from "antd";
import SkeletonImage from "antd/es/skeleton/Image";

function Loading() {
  return (
    <div className="bg-cyan-950 h-screen">
      <div className="container mx-auto flex">
        <div className="w-3/4 pe-6">
          <Skeleton active paragraph={{ rows: 3 }} style={{ padding: 10 }} />
          <SkeletonImage active style={{ width: 600, height: 400 }} />

          {/* <div className="aspect-square my-4 bg-gray-900 overflow-hidden rounded-xl animate-pulse">
            <p className="mt-2"></p>
          </div> */}
        </div>
        <div className="w-1/4 p-4 border border-slate-950 shadow-sm shadow-slate-950 rounded-2xl">
          <Skeleton active paragraph={{ rows: 1 }} style={{ padding: 10 }} />
          <div className="">
            <SkeletonImage active style={{ width: 250, height: 200 }} />
          </div>
          <Skeleton active paragraph={{ rows: 3 }} style={{ padding: 10 }} />
          <SkeletonImage active style={{ width: 250, height: 200 }} />
          <Skeleton active paragraph={{ rows: 3 }} style={{ padding: 10 }} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
