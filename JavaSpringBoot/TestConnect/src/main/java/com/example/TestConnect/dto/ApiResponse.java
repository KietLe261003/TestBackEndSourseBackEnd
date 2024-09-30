package com.example.TestConnect.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApiResponse {
    int status;
    String message;
    Object data;
}
