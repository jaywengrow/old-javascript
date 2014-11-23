class PagesController < ApplicationController
  def home
  end

  def guess
  end

  def tic_tac_toe
  end

  def puzzle
  end

  def memory
  end

  def abc
    @shuffled_letters = ('A'..'Z').to_a#.shuffle
  end

  def maze
  end
end
