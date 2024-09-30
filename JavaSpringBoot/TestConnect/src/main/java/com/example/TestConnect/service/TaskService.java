package com.example.TestConnect.service;

import com.example.TestConnect.entity.Task;
import com.example.TestConnect.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    TaskRepository taskRepository;
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }
}
