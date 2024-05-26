import { Link } from '@inertiajs/react';

export default function Table({ headers, data, prefix, className='', ...props }) {
    return (
        <div {...props} className={`flex flex-col border border-primary-300 rounded-sm h-min ${className}`}>
            <div className="flex flex-row bg-primary-200 text-white-300 font-medium">
                {headers && headers.map((header, index) => (
                    <>
                        <div className={`flex py-1 px-2 ${header[2]}`}>{header[1]}</div>
                        {index < headers.length-1 && (
                            <div className="bg-primary-200 w-px"></div>
                        )}
                    </>
                ))}
            </div>
            {data && data.map((row) => {
                let temp = (
                    <div className="flex flex-row text-gray-400 border-t border-primary-200">
                        {headers.map((header, index) => (
                            <>
                                <div className={`flex py-1 px-2 ${header[2]}`}>{row[header[0]]}</div>
                                {index < headers.length-1 && (
                                    <div className="bg-primary-200 w-px"></div>
                                )}
                            </>
                        ))}
                    </div>
                )
                if (prefix) {
                    return (
                        <Link
                            href={route(prefix, row['route'])}
                            className='hover:bg-white-200'
                        >{temp}</Link>
                    )
                } else {
                    return temp
                }
            })}
        </div>
    )
}