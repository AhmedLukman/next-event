import EventsGrid from '@/components/ui/EventsGrid';
import Filters from '@/components/ui/Filters';
import { SAMPLE_EVENTS_DATA } from '@/lib/constants';
import { Pagination } from '@nextui-org/pagination';
import React from 'react'

const VirtualEventsPage = () => {
  return (
    <main>
      <div className=" h-[70svh] mb-14 shadow-xl relative flex bg-fixed justify-center items-center bg-[url('/assets/images/virtual.jpg')] bg-bottom bg-cover">
        <div className="absolute inset-0 bg-transparent/50" />
        <h2 className=" text-3xl md:text-5xl z-10 text-white text-center">
          Virtual Events
        </h2>
      </div>
      <Filters />
      <EventsGrid events={SAMPLE_EVENTS_DATA} />
      <div className="flex mb-10 items-center justify-center">
        <Pagination total={10} initialPage={1} />
      </div>
    </main>
  );
}

export default VirtualEventsPage