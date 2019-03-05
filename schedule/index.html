---
layout: default
title: Schedule
metatitle: Schedule
group: "navigation"
weight: 3
image: banners/schedule.png
---
<link rel="stylesheet" href="/assets/css/schedule.css?version=1.0">
<div class="page-title schedule">
    <div class="wrapper">
        <h1>Schedule</h1>
        <h2>Our talks and speakers</h2>
    </div>
</div>
<div class="row">
    <div class="wrapper relative">
        <div class="col span12">
            {% for day in site.data.2020.speakers %}
            <h2 class="text-center">{{day.name}}</h2>
            {{day.description}}
            <table class="schedule-wrapper">
            {% for slot in day.slots %}
            {% if slot.slottype != 'mc' %}
                <tr class="slot">
                    <td class="time"rowspan="{% if slot.slottype == "talk"%}3{% else %}2{% endif %}">{{slot.time}}</td>
                    {% for track in slot.tracks %}
                    <td class="location{% if track.track.tooltip %} tutorial{% endif %}" colspan="{{track.track.colspan}}" title="{{track.track.tooltip}}">{{track.track.location}}</td>
                    {% endfor %}
                </tr>
                <tr class="slot">
                    {% for track in slot.tracks %}
                    <td class="track {{slot.slottype}}" id="{{track.track.id}}" colspan="{{track.track.colspan}}" rowspan="{{track.track.rowspan}}">
                        <div class="track-slot-meta">
                            <span class="location">{{track.track.location}}</span>
                            <span class="track-name">{{track.track.name}}</span>
                            {% if track.track.prereqs %}
                                <a href="prereqs/">Prerequisites</a><br>
                            {% endif %}
                            <span class="title">
                                <span class="main-title">{{track.track.title}}</span>
                                <span class="subtitle">{{track.track.subtitle}}</span>
                            </span>
                            {% if track.track.speaker %}
                            <span class="speaker">
                                Speaker:
                                <a href="/speakers/#{{track.track.slug}}">{{track.track.speaker}}</a>
                            </span>
                            {% else if track.track.speakers %}
                            <span class="speaker">
                            {% for speaker in track.track.speakers %}
                            <a href="/speakers/#{{speaker.slug}}">{{speaker.speaker}}</a>
                            {% if speaker != track.track.speakers.last %}&amp; {% endif %}
                            {% endfor %}
                            </span>
                            {% endif %}
                            {% if track.track.level %}
                            <span class="level">Level: {{track.track.level}}</span>
                            {% endif %}
                        </div>
                        {% if slot.slottype == "talks" %}
                        <p class="short-description">
                            {{track.track.description | truncate: 150}}
                            <a class="more">See More</a>
                        </p>
                        <div class="full-description">
                            {{track.track.description}}
                            <a class="less">See Less</a>
                        </div>
                        {% else %}
                        <p class="description">
                            {{track.track.description}}
                        </p>
                        {% endif %}
                        {% if track.track.menulink %}
                        <p><a href="/menu/#{{track.track.menulink}}">Tasty food menu &raquo;</a></p>
                        {% endif %}
                        {% if track.track.video %}
                        <span class="video"><a href="https://www.youtube.com/watch?v={{track.track.video}}&list={{site.data.2020.playlist}}">Video &raquo;</a></span>
                        {% endif %}
                    </td>
                    {% endfor %}
                </tr>
            {% endif %}
            {% endfor %}
            </table>
            {% endfor %}
        </div>
    </div>
</div>
<script src="/assets/js/jquery-ui.min.js"></script>
<link rel="stylesheet" href="/assets/js/jquery-ui.min.css">
<script>
    $( function() {
        $( document ).tooltip();
    } );

    $('.more').click(function(e){
        $(this).parent().hide();
        $(this).parent().siblings(".full-description").show();
    })

    $('.less').click(function(e){
        $(this).parent().hide();
        $(this).parent().siblings(".short-description").show();
    })
</script>
