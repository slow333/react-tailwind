import { Routes, Route } from 'react-router-dom';
import BasicTw from '../tailwind/basic';
import LayoutEls from '../tailwind/layout-elements';
import MediaHandle from '../tailwind/media-handle';
import TwCustome from '../tailwind/tw-custumize';
import EtcMore from '../tailwind/etc-more';
import Note from '../note';

function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Note />} />
        <Route path="/basic" element={<BasicTw />} />
        <Route path="/layout-elements" element={<LayoutEls />} />
        <Route path="/media-handle" element={<MediaHandle />} />
        <Route path="/tw-customize" element={<TwCustome />} />
        <Route path="/etc-more" element={<EtcMore />} />
      </Routes>
    </div>
  )
}

export default MyRoutes
