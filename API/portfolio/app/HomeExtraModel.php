<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HomeExtraModel extends Model
{
    protected $table = 'home_extra_section';
    protected $primaryKey = 'id';
    public    $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
