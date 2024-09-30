package com.example.TestConnect.controller;

import com.example.TestConnect.dto.ApiResponse;
import com.example.TestConnect.entity.Task;
import com.example.TestConnect.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TaskController {
    @Autowired
    TaskService taskService;
    @GetMapping("/task")
    public ApiResponse getTask() {
        ApiResponse apiResponse = ApiResponse.builder()
                .status(200)
                .message("Get task successfully")
                .data(taskService.getTasks())
                .build();
        return apiResponse;
    }

}
