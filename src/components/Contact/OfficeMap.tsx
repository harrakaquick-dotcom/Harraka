// Fills the height of the form beside it on desktop; fixed height when stacked.
const OfficeMap = () => (
  <div className="flex flex-col overflow-hidden rounded-[22px] border border-line bg-surface">
    <div className="border-b border-ink/10 px-5.5 py-4.5">
      <div className="text-lg font-bold tracking-[-0.03em]">Head office</div>
      <p className="mt-1.5 text-[14.5px] leading-[1.55] text-ink/62">
        Chiromo Road, Westlands, Nairobi. Visits by appointment — the stores
        are working sites.
      </p>
    </div>
    <iframe
      src="/coverage-map.html"
      title="Harraka Nairobi coverage map"
      loading="lazy"
      className="block h-[min(46vh,340px)] w-full flex-1 border-0 max-md:h-75 lg:min-h-85"
    />
  </div>
);

export default OfficeMap;
