import ServiceBox from "./service/components/service-box";

function AddSubscriptionPage() {
  return (
    <>
      <header className="mt-20 mb-8 flex flex-col items-center justify-center">
        <div className="mb-2 text-3xl font-bold text-indigo-600">
          구독 서비스 추가
        </div>
        <p className="text-md mb-5 text-slate-500">클릭 하면 추가 됩니다.</p>
        <div>
          <ServiceBox />
        </div>
      </header>
    </>
  );
}

export default AddSubscriptionPage;
