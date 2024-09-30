package com.example.TestConnect.base_exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public enum ErrorCode {
    TaskNotFound(1001,"Not found Task")
    ;
    private int code;
    private String msg;

}
