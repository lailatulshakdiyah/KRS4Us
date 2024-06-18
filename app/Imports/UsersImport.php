<?php

namespace App\Imports;

use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class UsersImport implements ToCollection, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row)
        {
            dd($row);
            if ($row['nama'])
            {
                User::updateOrCreate([
                    'nim' => $row['nim'],
                ], [
                    'name' => $row['nama'],
                    'nim' => $row['nim'],
                    'email' => $row['email'],
                    'password' => Hash::make($row['password']),
                ]);

                // \Illuminate\Support\Facades\Mail::to($row['email'])
                //     ->send(new \App\Mail\Credentials([
                //         'name' => $row['nama'],
                //         'nim' => $row['nim'],
                //         'password' => $row['password']
                //     ]));
            }
        }
    }
}
