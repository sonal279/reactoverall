function Card({ ProductName, Price = 100 }) {
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-5 px-5 pb-20">
        <div className="flex justify-between ">
          <h3 className="font-bold ">{ProductName}</h3>
          <h3>Price</h3>
        </div>
        <div className="flex  justify-between">
          <p>#345</p>
          <p>{Price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
