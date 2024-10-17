import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';

const MonthCalender = () => {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [open, setOpen] = useState(false); // Open by default

  return (
    <div className="w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangePicker']} className="w-full">
          <DateRangePicker
            // value={selectedDateRange}
            onChange={(newValue) => setSelectedDateRange(newValue)}
            open={open} // Keep the picker open by default
            onOpen={() => setOpen(true)} // Ensure it remains open when needed
            onClose={() => setOpen(false)} // Prevent closing
            className="w-full"
            calendars={2} // Show two calendars side by side
            showToolbar={false} // Remove toolbar with labels like "Check-in" and "Check-out"
            renderInput={() => null} // Hide the input field since we are displaying the calendar directly
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default MonthCalender;
