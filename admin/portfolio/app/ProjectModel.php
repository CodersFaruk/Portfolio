<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProjectModel extends Model
{
    protected $table = 'project_table';
    protected $primaryKey = 'id';
    public    $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
