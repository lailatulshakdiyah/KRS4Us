export default function Calendar({ courses }){
    const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    return (
        <>
            <div className="flex flex-row text-xs text-gray-400">
                <div className="flex justify-center w-1/6">Senin</div>
                <div className="flex justify-center w-1/6">Selasa</div>
                <div className="flex justify-center w-1/6">Rabu</div>
                <div className="flex justify-center w-1/6">Kamis</div>
                <div className="flex justify-center w-1/6">Jumat</div>
                <div className="flex justify-center w-1/6">Sabtu</div>
            </div>
            <div className="flex flex-row py-8">
                {days.map((day, index) => (
                    <>
                        <div className="flex flex-col w-1/6 p-2 gap-2">
                            {courses && courses[day].map((course) => {
                                let bg;
                                switch (course['type']) {
                                    case 'kuliah':
                                        bg = 'bg-primary-300';
                                        break;
                                    case 'praktikum':
                                        bg = 'bg-success-300';
                                        break;
                                    case 'responsi':
                                        bg = 'bg-warning-300';
                                        break;
                                    default:
                                        bg = 'bg-gray-75';
                                }
                                return (
                                    <div className={`flex flex-col ${bg} p-1.5 text-white-300 rounded-sm shadow-md`} style={{fontSize: '0.6rem', lineHeight: '0.75rem'}}>
                                        <div className="flex font-semibold">{course['start_time']} - {course['end_time']}</div>
                                        <div className="flex">{course['name']}</div>
                                        <div className="flex">{course['type'][0].toUpperCase()}{course['class']} - {course['room']}</div>
                                    </div>
                                )
                            })}
                        </div>
                        {index < 5 ? (
                            <div className="bg-gray-75 w-px"></div>
                        ) : (<></>)}
                    </>
                ))

                }
            </div>
        </>
    )
}