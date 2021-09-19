<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AdminModel extends Model
{
    protected $table = 'admin_login';
    protected $primaryKey = 'id';
    public    $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
