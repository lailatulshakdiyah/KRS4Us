export default function Calendar({ courses }){
    const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    return (
        <>
            <div className="flex flex-row text-xs">
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
                            {courses[day].map((course, _) => {
                                let bg;
                                switch (course['type']) {
                                    case 'kuliah':
                                        bg = 'bg-blue-700';
                                        break;
                                    case 'praktikum':
                                        bg = 'bg-green-500';
                                        break;
                                    case 'responsi':
                                        bg = 'bg-yellow-300';
                                        break;
                                    default:
                                        bg = 'bg-gray-400';
                                }
                                return (
                                    <div className={`flex flex-col ${bg} p-1.5 text-white rounded-sm`} style={{fontSize: '0.6rem', lineHeight: '0.75rem'}}>
                                        <div className="flex font-semibold">{course['start_time']} - {course['end_time']}</div>
                                        <div className="flex">{course['name']}</div>
                                        <div className="flex">{course['type'][0].toUpperCase()}{course['class']} - {course['room']}</div>
                                    </div>
                                )
                            })}
                        </div>
                        {index < 5 ? (
                            <div className="bg-gray-300 w-px"></div>
                        ) : (<></>)}
                    </>
                ))

                }
            </div>
        </>
    )
}