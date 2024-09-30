package com.example.TestConnect.base_exception;

import com.example.TestConnect.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GloabalExceptionHandler {
    @ExceptionHandler(value = RuntimeException.class)
    ResponseEntity<ApiResponse> exceptionHandler(Exception ex, WebRequest request) {
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage(ex.getMessage());
        apiResponse.setStatus(1001);
        return ResponseEntity.badRequest().body(apiResponse);
    }
    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<String> exceptionHandler(MethodArgumentNotValidException ex, WebRequest request) {
        return ResponseEntity.badRequest().body(ex.getFieldError().getDefaultMessage());
    }
    @ExceptionHandler(value = AppException.class)
    ResponseEntity<ApiResponse> exceptionHandler(AppException ex, WebRequest request) {
        ErrorCode errorCode=ex.getErrorCode();
        ApiResponse apiResponse = ApiResponse.builder()
                .status(errorCode.getCode())
                .message(errorCode.getMsg()).build();
        return ResponseEntity.badRequest().body(apiResponse);
    }
}
