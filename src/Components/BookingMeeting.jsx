const BookingMeeting = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-around gap-4">
            <h1 className="text-xl font-semibold">Booked Meetings with:</h1>
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-x-20">
                <img src="https://assets-global.website-files.com/6596ff37d7008fe3cd6bba88/6596ff37d7008fe3cd6bbab5_Google.svg" alt=""  />
                <img src="https://assets-global.website-files.com/6596ff37d7008fe3cd6bba88/6596ff37d7008fe3cd6bbab2_Youtube.svg" alt=""  />
                <img src="https://assets-global.website-files.com/6596ff37d7008fe3cd6bba88/6596ff37d7008fe3cd6bbab4_Pinterest.svg" alt=""  />
                <img src="https://assets-global.website-files.com/6596ff37d7008fe3cd6bba88/6596ff37d7008fe3cd6bbab3_Facebook.svg" alt=""  />
            </div>
        </div>
    );
};

export default BookingMeeting;