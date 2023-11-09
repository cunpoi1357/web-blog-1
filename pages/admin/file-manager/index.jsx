import AdminLayout from '@layouts/Admin'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'
import { uploadService } from 'service/upload'

function FileManagerPage() {
    const { data, refetch } = useQuery({
        queryFn: uploadService.getAll,
        queryKey: ['upload']
    })

    const handleDelete = async filename => {
        try {
            await uploadService.deleteFile(filename)
            toast.success('Xóa file thành công!')
            refetch()
        } catch (error) {
            toast.error('Xóa file thất bại!')
        }
    }

    return (
        <AdminLayout>
            <div className='flex justify-end py-4'> Tải lên tệp tin </div>
            <div className='flex flex-col'>
                <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                        <div className='overflow-hidden'>
                            <table className='min-w-full text-left text-sm font-light'>
                                <thead className='border-b font-medium dark:border-neutral-500'>
                                    <tr>
                                        <th scope='col' className='px-6 py-4'>
                                            #
                                        </th>
                                        <th scope='col' className='px-6 py-4'>
                                            Tên tệp tin
                                        </th>
                                        <th scope='col' className='px-6 py-4'>
                                            Đường dẫn
                                        </th>
                                        <th scope='col' className='px-6 py-4'>
                                            Thao tác
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data &&
                                        data.fileNames.map((item, index) => (
                                            <tr
                                                key={item}
                                                className='border-b dark:border-neutral-500'
                                            >
                                                <td className='whitespace-nowrap px-6 py-4 font-medium'>
                                                    {index}
                                                </td>
                                                <td className='whitespace-nowrap px-6 py-4'>
                                                    {item}
                                                </td>
                                                <td className='whitespace-nowrap px-6 py-4'>
                                                    {`api/upload/${item}`}
                                                </td>
                                                <td className='flex gap-4 whitespace-nowrap px-6 py-4'>
                                                    <Link
                                                        href={`/api/upload/${item}`}
                                                        target='_blank'
                                                        className='transition-colors hover:text-emerald-600 hover:underline'
                                                    >
                                                        Xem
                                                    </Link>
                                                    <button
                                                        className='transition-colors hover:text-emerald-600 hover:underline'
                                                        onClick={() =>
                                                            handleDelete(item)
                                                        }
                                                    >
                                                        Xóa
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default FileManagerPage
