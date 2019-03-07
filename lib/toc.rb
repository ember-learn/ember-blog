require 'redcarpet'

module TOC
  class << self
    def registered(app)
      app.helpers Helpers
    end
    alias :included :registered
  end

  module TableOfContents
    extend self

    def anchorify(text)
      text.gsub(/&#?\w+;/, '-').gsub(/\W+/, '-').gsub(/^-|-$/, '').downcase
    end
  end

  module Helpers
    def index_for(data)
      result = '<ol id="toc-list">'

      data.each_entry do |section, entries|
        next if entries.any? do |entry|
          entry[:skip_sidebar]
        end

        request_path_splits = request.path.split('/')

        current_url = request_path_splits[1]
        sub_url     = request_path_splits[2]
        intro_page  = request_path_splits.length == 3
        sub_url     = nil if intro_page
        chapter     = entries[0].url.split("/")[0]

        current = (chapter == current_url)

        result << %Q{
          <li class="level-1#{current ? ' selected' : ''}">
            <a href="/guides/#{entries[0].url}">#{section}</a>
            <ol#{current ? " class='selected'" : ''}>
        }

        entries.each do |entry|
          next if entry[:skip_sidebar_item]

          current_segment = entry.url.split("/")[1]

          sub_current = if current_segment and current_segment == sub_url
            true
          elsif intro_page and current_url == entry.url
            true
          else
            false
          end

          result << %Q{
            <li class="level-3#{sub_current ? ' sub-selected' : ''}">
              <a href="/guides/#{entry.url}">#{entry.title}</a>
            </li>
          }
        end

        result << '</ol></li>'
      end

      result << '</ol>'

      result
    end

    def chapter_name
      if current_guide
        return current_guide.title
      else
        return ""
      end
    end

    def section_name
      current_section[0] if current_section
    end

    def chapter_heading
      name = chapter_name.strip
      return if name.blank?

      %Q{
        <h1>#{name}
          <a href="#{chapter_github_source_url}" target="_blank" class="edit-page icon-pencil">Edit Page</a>
        </h1>
      }
    end

    def section_slug
      request.path.split('/')[1]
    end

    def guide_slug
      request.path.split('/')[1..-2].join('/')
    end

    def chapter_github_source_url
      base_guide_url = "https://github.com/emberjs/website/tree/master/source/guides"
      if section_slug == guide_slug
        return "#{base_guide_url}/#{current_guide['url']}/index.md"
      else
        return "#{base_guide_url}/#{current_guide['url'].gsub(/.html/, '')}.md"
      end
    end

    def warning
      return unless current_guide
      return unless current_section
      warning_key = current_guide["warning"]
      warning_key ? WARNINGS[warning_key] : nil
    end


    WARNINGS = {
        "canary"=>  %Q{
          <div class="under_construction_warning">
            <h3>
              <div class="msg">
                WARNING: this guide refers to a feature only available in canary (nightly/unstable) builds of Ember.js.
              </div>
            </h3>
          </div>
        },
        "canary-data"=>  %Q{
          <div class="under_construction_warning">
            <h3>
              <div class="msg">
                WARNING: this guide refers to a feature only available in canary (nightly/unstable) builds of Ember Data.
              </div>
            </h3>
          </div>
        }
    }

  end
end

::Middleman::Extensions.register(:toc, TOC)
