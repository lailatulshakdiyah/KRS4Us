import { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Table({ headers, data, editPrefix, deletePrefix, className='', ...props }) {
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
            {data && data.map((row, index) => (
                <Row
                    row={row}
                    headers={headers}
                    editPrefix={editPrefix}
                    deletePrefix={deletePrefix}
                />
            ))}
        </div>
    )
}

const Row = ({row, headers, editPrefix, deletePrefix}) => {
    const [isHovered, setIsHovered] = useState(false);

    let temp = (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative flex flex-row border-t border-primary-200">
            {headers.map((header, index) => (
                <>
                    <div className={`flex py-1 px-2 ${header[2]}`}>{row[header[0]]}</div>
                    {index < headers.length-1 && (
                        <div className="bg-primary-200 w-px"></div>
                    )}
                </>
            ))}
            {deletePrefix && isHovered && (
                <Link
                    href={route(deletePrefix, row['route'])}
                    className='absolute -translate-y-1/2 top-1/2 end-1 transition bg-red-400 px-2 text-white-0 hover:bg-red-600 rounded-md'
                    method='delete'
                    as='button'
                >
                    X</Link>
            )}
        </div>
    )

    if (editPrefix) {
        return (
            <Link
                href={route(editPrefix, row['route'])}
                className='transition duration-200 ease-in-out text-gray-400 hover:bg-primary-100 hover:text-primary-50'
            >{temp}</Link>
        )
    } else {
        return temp
    }
};