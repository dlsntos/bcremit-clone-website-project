import TransactionHistoryCard from "../../../features/transaction-history/TransactionHistoryCard";

function History (){
  return (
    <div className="px-8">
      <section className="text-start">
        <h1 className="mt-12 max-w-sm text-5xl font-extrabold text-bluewhale">Manage your Transactions</h1>
        <p className="text-xl text-gray-500">Manage and monitor your transactions</p>
      </section>

      <section className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,400px))] auto-rows-[15rem] place-content-start gap-10">
        {/*placeholder grid item*/}
        {/*to be replaced with mapped card later*/}
        <TransactionHistoryCard />
        <TransactionHistoryCard />
        <TransactionHistoryCard />
      </section>
    </div>
  );
}

export default History;