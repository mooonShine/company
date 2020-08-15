<?php
/**
 *  PDO数据库操作类
 *  time   : 2017-2-9 13:42:52
 *  author : gy
 */
class pdoManager
{
    //数据库链接资源
    private $conn = null;

    /**
     * 创建数据库链接对象
     * @param $host
     * @param $user
     * @param $pwd
     */
    public function __construct($host,$user,$pwd){
        try{
            $this->conn = new PDO($host,$user,$pwd);
            $this->conn->query('set names utf8');
            $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        }catch (PDOException $e){
            die('错误信息：'.$e->getMessage());
        }
    }

    /**
     * 增删改方法
     * @param $sql
     * @return int
     */
    public function toExec($sql){
        try{
            $result = $this->conn->exec($sql);
            return $result;
        }catch (PDOException $e){
            die('错误信息：'.$e->getMessage());
        }
    }

    /**
     * 数据查询方法
     * @param $sql
     * @param bool $isMore
     * @return array|mixed
     */
    public function getData($sql,$isMore = true){
        try{
            $result = $this->conn->query($sql);
            if($isMore){
                $content = $result->fetchAll(PDO::FETCH_ASSOC);
            }else{
                $content = $result->fetch(PDO::FETCH_ASSOC);
            }
            return $content;
        }catch (PDOException $e){
            die('错误信息：'.$e->getMessage());
        }
    }

    /**
     * 释放PDO对象
     */
    public function __destruct(){
        $this->conn = null;
    }
}
$db = new pdoManager('mysql:dbname=jiudu;host=127.0.0.1','root','root');
?>