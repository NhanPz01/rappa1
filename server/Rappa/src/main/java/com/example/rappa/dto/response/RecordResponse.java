package com.example.rappa.dto.response;

public class RecordResponse {
    private String id;
    private String title;
    private String content;
    private String username;

    public RecordResponse() {
    }

    public RecordResponse(int id,String title, String content, String username) {
        // id is random number. Just when the object is created.
        this.id = id+"";
        this.title = title;
        this.content = content;
        this.username = username;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
