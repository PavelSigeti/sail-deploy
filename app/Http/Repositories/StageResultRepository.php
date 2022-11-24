<?php

namespace App\Http\Repositories;


use App\Models\StageResult as Model;
use Illuminate\Support\Facades\DB;

class StageResultRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getUsersRating()
    {
        $columns = [
            'nickname', 'name', 'surname',
            'user_id', DB::raw('SUM(result) as total')
        ];


        $result = $this->startConditions()
            ->join('users', 'stage_results.user_id', '=', 'users.id')
            ->select($columns)
            ->groupBy('user_id')
            ->orderBy('total', 'DESC')
            ->paginate(10);


        return $result;
    }

    public function getUniversityRating()
    {
        $columns = [
            'universities.name',
            DB::raw('SUM(result) as total')
        ];


        $result = $this->startConditions()
            ->join('users', 'stage_results.user_id', '=', 'users.id')
            ->join('universities', 'users.university_id', 'universities.id')
            ->select($columns)
            ->groupBy('university_id')
            ->orderBy('total', 'DESC')
            ->paginate(10);


        return $result;
    }
}
