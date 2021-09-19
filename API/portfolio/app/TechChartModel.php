<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TechChartModel extends Model
{
    protected $table = 'tech_chart_table';
    protected $primaryKey = 'id';
    public    $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
