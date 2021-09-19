<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServiceModel extends Model
{
    protected $table = 'service_table';
    protected $primaryKey = 'id';
    public    $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
